from django.contrib import admin
from .models import HeroSettings, Package
from .models import WhyChooseUs
from .models import Testimonial


admin.site.register(HeroSettings)
admin.site.register(Package)
admin.site.register(WhyChooseUs)
admin.site.register(Testimonial)