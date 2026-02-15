from rest_framework import serializers
from .models import Rating, Application

class RatingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rating
        fields = ["id", "hostel", "rating", "comment", "created_at"]
        read_only_fields = ["created_at"]

    def validate(self, data):
        user = self.context["request"].user
        hostel = data.get("hostel")

        if Rating.objects.filter(user=user, hostel=hostel).exists():
            raise serializers.ValidationError("You have already rated this hostel.")

        return data

class ApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Application
        fields = ["id", "hostel", "message", "status", "created_at"]
        read_only_fields = ["status", "created_at"]
