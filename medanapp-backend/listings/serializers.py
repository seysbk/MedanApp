from rest_framework import serializers
from .models import University, Location, Hostel, RoomType, HostelImage
from django.db.models import Avg

class UniversitySerializer(serializers.ModelSerializer):
    class Meta:
        model = University
        fields = "__all__"

class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location
        fields = "__all__"

class HostelImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = HostelImage
        fields = ["image_url", "is_cover"]

class RoomTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = RoomType
        fields = ["id", "name", "capacity", "price", "price_period"]

class HostelSerializer(serializers.ModelSerializer):
    images = HostelImageSerializer(many=True, read_only=True)
    room_types = RoomTypeSerializer(many=True, read_only=True)
    location = serializers.StringRelatedField()
    # Include average rating (read-only)
    average_rating = serializers.FloatField(read_only=True)

    class Meta:
        model = Hostel
        fields = [
            "id", "name", "location", "price_period", "distance_from_campus",
            "is_shared", "max_people_per_room", "description",
            "images", "room_types", "average_rating"
        ]

    def get_average_rating(self, obj):
        avg = obj.rating_set.aggregate(Avg("rating"))["rating__avg"]
        return round(avg, 1) if avg else None    

    # Validate shared hostel logic
    def validate(self, data):
        """
        Ensure that max_people_per_room is set
        only if hostel is marked as shared.
        """
        if data.get("is_shared") and not data.get("max_people_per_room"):
            raise serializers.ValidationError(
                "Shared hostels must specify max_people_per_room."
            )
        return data
