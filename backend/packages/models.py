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
        ('silver', 'Silver'),  # Changed from 'bronze'
        ('custom', 'Custom'),  # Added custom option
    ]

    tier = models.CharField(max_length=10, choices=TIER_CHOICES, unique=True)
    price = models.CharField(max_length=50)
    color = models.CharField(max_length=100, default='bg-gradient-to-r from-gray-300 to-yellow-400')
    features = models.JSONField(default=list)  # List of features
    is_custom = models.BooleanField(default=False)  # Flag for custom package

    def __str__(self):
        return f"{self.tier} - {self.price}"
    
class WhyChooseUs(models.Model):
    icon = models.CharField(max_length=10)  # Emoji
    title = models.CharField(max_length=100)
    description = models.TextField()

    def __str__(self):
        return self.title
    
class Testimonial(models.Model):
    name = models.CharField(max_length=100)
    location = models.CharField(max_length=100)
    text = models.TextField()
    image = models.ImageField(upload_to='testimonials/', blank=True, null=True)

    def __str__(self):
        return self.name
    
class GalleryImage(models.Model):
    image = models.ImageField(upload_to='gallery/')
    alt_text = models.CharField(max_length=200, blank=True)

    def __str__(self):
        return self.alt_text or f"Gallery Image {self.id}"
    
class HeroVideo(models.Model):
    video = models.FileField(upload_to='hero_videos/', blank=True, null=True)
    video_url = models.URLField(blank=True, null=True, help_text="Paste Cloudinary or external video URL")
    title = models.CharField(max_length=100, blank=True)
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ['order']

    def __str__(self):
        return self.title or f"Video {self.id}"