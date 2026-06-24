from django.contrib import admin
from django.urls import path
from packages import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('whatsapp/', views.whatsapp_webhook, name='whatsapp_webhook'),
    path('api/chat/', views.chat_api, name='chat_api'),
]