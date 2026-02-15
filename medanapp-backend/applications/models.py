from django.conf import settings
from django.db import models
from listings.models import Hostel
from django.core.validators import MinValueValidator, MaxValueValidator

class Rating(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE
    )
    hostel = models.ForeignKey(
        Hostel,
        on_delete=models.CASCADE
    )

    rating = models.PositiveSmallIntegerField(
        validators=[MinValueValidator(1), MaxValueValidator(5)]
    )
    comment = models.TextField(blank=True)

    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ("hostel", "user")

class Application(models.Model):
    STATUS_CHOICES = (
        (1, "Pending"),
        (2, "Responded"),
        (3, "Closed"),
    )

    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE
    )
    hostel = models.ForeignKey(
        Hostel,
        on_delete=models.CASCADE
    )

    message = models.TextField()
    status = models.IntegerField(choices=STATUS_CHOICES, default=1)

    created_at = models.DateTimeField(auto_now_add=True)
