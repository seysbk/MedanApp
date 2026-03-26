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
    average_rating = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Hostel
        fields = [
            "id",
            "name",
            "location",
            "description",
            "digital_address",
            "latitude",
            "longitude",
            "min_price",
            "max_price",
            "price_period",
            "contact_phone",
            "contact_whatsapp",
            "contact_email",
            "website_url",
            "instagram_url",
            "facebook_url",
            "gender_policy",
            "is_verified",
            "minutes_to_campus",
            "created_at",
            "images",
            "room_types",
            "average_rating",
        ]

    def get_average_rating(self, obj):
        avg = obj.rating_set.aggregate(Avg("rating"))["rating__avg"]
        return round(avg, 1) if avg else None
