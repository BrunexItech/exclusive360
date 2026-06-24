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