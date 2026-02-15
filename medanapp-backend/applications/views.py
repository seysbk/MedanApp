from django.shortcuts import render
from rest_framework import generics, permissions
from .models import Rating, Application
from .serializers import RatingSerializer, ApplicationSerializer
from django.core.mail import send_mail
from django.conf import settings


class CreateRatingView(generics.CreateAPIView):
    serializer_class = RatingSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class HostelRatingsView(generics.ListAPIView):
    serializer_class = RatingSerializer

    def get_queryset(self):
        hostel_id = self.kwargs["hostel_id"]
        return Rating.objects.filter(hostel_id=hostel_id)
    
class CreateApplicationView(generics.CreateAPIView):
    serializer_class = ApplicationSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class UserApplicationsView(generics.ListAPIView):
    serializer_class = ApplicationSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Application.objects.filter(user=self.request.user)


class CreateApplicationView(generics.CreateAPIView):
    serializer_class = ApplicationSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        application = serializer.save(user=self.request.user)

        # Send email notification
        send_mail(
            subject="New Hostel Application",
            message=f"You received a new application for {application.hostel.name}.",
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=[application.hostel.contact_email] if application.hostel.contact_email else [],
            fail_silently=True,
        )




