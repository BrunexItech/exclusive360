from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from packages import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('whatsapp/', views.whatsapp_webhook, name='whatsapp_webhook'),
    path('api/chat/', views.chat_api, name='chat_api'),
    path('api/hero/', views.hero_api, name='hero_api'),
    path('api/packages/', views.packages_api, name='packages_api'),
    path('api/why-choose-us/', views.why_choose_us_api, name='why_choose_us_api'),
    path('api/testimonials/', views.testimonials_api, name='testimonials_api'),
    path('api/gallery/', views.gallery_api, name='gallery_api'),
]

# Serve media files in development
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)