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
]

# Serve media files in development
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)