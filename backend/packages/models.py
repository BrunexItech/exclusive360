from django.db import models

class HeroSettings(models.Model):
    background_image = models.ImageField(upload_to='hero/', default='hero/default.jpg')
    button_link = models.CharField(max_length=200, default='/packages')

    def __str__(self):
        return "Hero Settings"