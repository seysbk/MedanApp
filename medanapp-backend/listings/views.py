from rest_framework import generics, filters
from .models import University, Location, Hostel
from django_filters.rest_framework import DjangoFilterBackend
from .serializers import (
    UniversitySerializer,
    LocationSerializer,
    HostelSerializer,
)
from accounts.permissions import IsManager

class UniversityListView(generics.ListAPIView):
    queryset = University.objects.all()
    serializer_class = UniversitySerializer

class LocationListView(generics.ListCreateAPIView):
    serializer_class = LocationSerializer   

    def get_queryset(self):
        university_id = self.request.query_params.get("university_id")
        return Location.objects.filter(university_id=university_id)

class HostelListView(generics.ListAPIView):
    queryset = Hostel.objects.filter(is_verified=True)
    serializer_class = HostelSerializer

    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]

    filterset_fields = [
        "university",
        "location",
        "gender_policy",
        "price_period",
        "minutes_to_campus",
    ]


    search_fields = ["name", "location__name"]
    ordering_fields = ["min_price", "created_at", "minutes_to_campus",]

class HostelDetailView(generics.RetrieveAPIView):
    queryset = Hostel.objects.filter(is_verified=True)
    serializer_class = HostelSerializer


class CreateHostelView(generics.CreateAPIView):
    serializer_class = HostelSerializer
    permission_classes = [IsManager]
