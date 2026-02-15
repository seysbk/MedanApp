from django.contrib import admin
from .models import (
    University,
    Location,
    Hostel,
    RoomType,
    HostelImage,
)

admin.site.register(University)
admin.site.register(Location)
admin.site.register(Hostel)
admin.site.register(RoomType)
admin.site.register(HostelImage)