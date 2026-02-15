from django.urls import path
from .views import (
    UniversityListView,
    LocationListView,
    HostelListView,
    HostelDetailView,
    CreateHostelView,
)

urlpatterns = [
    path("universities/", UniversityListView.as_view()),
    path("locations/", LocationListView.as_view()),
    path("hostels/", HostelListView.as_view()),
    path("hostels/<int:pk>/", HostelDetailView.as_view()),
    path("hostels/create/", CreateHostelView.as_view()),
]