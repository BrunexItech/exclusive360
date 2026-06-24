from django.db import models

class HeroSettings(models.Model):
    background_image = models.ImageField(upload_to='hero/', default='hero/default.jpg')
    button_link = models.CharField(max_length=200, default='/packages')

    def __str__(self):
        return "Hero Settings"
    
class Package(models.Model):
    TIER_CHOICES = [
        ('platinum', 'Platinum'),
        ('gold', 'Gold'),
        ('bronze', 'Bronze'),
    ]

    tier = models.CharField(max_length=10, choices=TIER_CHOICES, unique=True)
    price = models.CharField(max_length=50)
    color = models.CharField(max_length=100, default='bg-gradient-to-r from-gray-300 to-yellow-400')
    features = models.JSONField(default=list)  # List of features

    def __str__(self):
        return f"{self.tier} - {self.price}"