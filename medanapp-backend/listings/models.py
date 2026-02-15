from django.db import models


class University(models.Model):
    name = models.CharField(max_length=255)
    short_name = models.CharField(max_length=50)
    city = models.CharField(max_length=100)
    country = models.CharField(max_length=100)

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

class Location(models.Model):
    university = models.ForeignKey(
        University,
        on_delete=models.CASCADE,
        related_name="locations"
    )
    name = models.CharField(max_length=100)

    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ("university", "name")

    def __str__(self):
        return f"{self.name} ({self.university.short_name})"

class Hostel(models.Model):
    PRICE_PERIOD_CHOICES = (
        (1, "Per Semester"),
        (2, "Per Academic Year"),
    )

    GENDER_POLICY_CHOICES = (
        (1, "Male"),
        (2, "Female"),
        (3, "Mixed"),
    )

    university = models.ForeignKey(
        University,
        on_delete=models.CASCADE,
        related_name="hostels"
    )
    location = models.ForeignKey(
        Location,
        on_delete=models.SET_NULL,
        null=True,
        related_name="hostels"
    )

    name = models.CharField(max_length=255)
    description = models.TextField()

    digital_address = models.CharField(max_length=100)
    latitude = models.DecimalField(max_digits=9, decimal_places=6, null=True, blank=True)
    longitude = models.DecimalField(max_digits=9, decimal_places=6, null=True, blank=True)

    min_price = models.DecimalField(max_digits=10, decimal_places=2)
    max_price = models.DecimalField(max_digits=10, decimal_places=2)
    price_period = models.IntegerField(choices=PRICE_PERIOD_CHOICES)

    contact_phone = models.CharField(max_length=20)
    contact_whatsapp = models.CharField(max_length=20, blank=True, null=True)
    contact_email = models.EmailField(blank=True, null=True)
    website_url = models.URLField(blank=True, null=True)
    instagram_url = models.URLField(blank=True, null=True)
    facebook_url = models.URLField(blank=True, null=True)

    gender_policy = models.IntegerField(choices=GENDER_POLICY_CHOICES)
    is_verified = models.BooleanField(default=False)

    minutes_to_campus = models.PositiveIntegerField(help_text="Estimated walking time to campus in minutes", null=True, blank=True)

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

class RoomType(models.Model):
    hostel = models.ForeignKey(
        Hostel,
        on_delete=models.CASCADE,
        related_name="room_types"
    )

    name = models.CharField(max_length=100)
    capacity = models.PositiveIntegerField()

    price = models.DecimalField(max_digits=10, decimal_places=2)
    price_period = models.IntegerField(choices=Hostel.PRICE_PERIOD_CHOICES)

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} - {self.hostel.name}"

class HostelImage(models.Model):
    hostel = models.ForeignKey(
        Hostel,
        on_delete=models.CASCADE,
        related_name="images"
    )

    image_url = models.URLField()
    is_cover = models.BooleanField(default=False)

    created_at = models.DateTimeField(auto_now_add=True)