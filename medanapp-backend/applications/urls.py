from django.urls import path
from .views import (
    CreateRatingView,
    HostelRatingsView,
    CreateApplicationView,
    UserApplicationsView,
)

urlpatterns = [
    path("ratings/", CreateRatingView.as_view()),
    path("hostels/<int:hostel_id>/ratings/", HostelRatingsView.as_view()),
    path("applications/", CreateApplicationView.as_view()),
    path("my-applications/", UserApplicationsView.as_view()),
]
