from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from twilio.twiml.messaging_response import MessagingResponse
from rag import get_response
from .models import HeroSettings
import json
import os

@csrf_exempt
def whatsapp_webhook(request):
    if request.method == 'POST':
        incoming_msg = request.POST.get('Body', '').strip()
        sender = request.POST.get('From', '')

        resp = MessagingResponse()
        msg = resp.message()

        try:
            reply = get_response(incoming_msg)
            msg.body(reply[:1600])
            
        except Exception as e:
            msg.body("We're experiencing technical issues. Please call 0729 140 646 for assistance.")

        return HttpResponse(str(resp))

    return HttpResponse("WhatsApp Webhook is active!")


@csrf_exempt
def chat_api(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            message = data.get('message', '')
            
            reply = get_response(message)
            return JsonResponse({'response': reply})
            
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)
    
    return JsonResponse({'error': 'Method not allowed'}, status=405)


def hero_api(request):
    hero = HeroSettings.objects.first()
    if hero:
        return JsonResponse({
            'background_image': hero.background_image.url if hero.background_image else '',
            'button_link': hero.button_link
        })
    return JsonResponse({'background_image': '', 'button_link': '/packages'})


from .models import Package

def packages_api(request):
    packages = Package.objects.all()
    data = []
    for pkg in packages:
        data.append({
            'tier': pkg.tier.capitalize(),
            'price': pkg.price,
            'color': pkg.color,
            'features': pkg.features,
        })
    return JsonResponse(data, safe=False)


from .models import WhyChooseUs

def why_choose_us_api(request):
    items = WhyChooseUs.objects.all()
    data = [{'icon': item.icon, 'title': item.title, 'description': item.description} for item in items]
    return JsonResponse(data, safe=False)


from .models import Testimonial

def testimonials_api(request):
    testimonials = Testimonial.objects.all()
    data = []
    for t in testimonials:
        data.append({
            'name': t.name,
            'location': t.location,
            'text': t.text,
            'image': t.image.url if t.image else '',
        })
    return JsonResponse(data, safe=False)


from .models import GalleryImage

def gallery_api(request):
    images = GalleryImage.objects.all()
    data = []
    for img in images:
        data.append({
            'id': img.id,
            'src': img.image.url if img.image else '',
            'alt': img.alt_text or f'Gallery image {img.id}',
        })
    return JsonResponse(data, safe=False)