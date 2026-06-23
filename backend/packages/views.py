from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from twilio.twiml.messaging_response import MessagingResponse
from rag import get_response
import os

@csrf_exempt
def whatsapp_webhook(request):
    if request.method == 'POST':
        incoming_msg = request.POST.get('Body', '').strip()
        sender = request.POST.get('From', '')

        resp = MessagingResponse()
        msg = resp.message()

        try:
            # Get response from RAG
            reply = get_response(incoming_msg)
            msg.body(reply[:1600])  # WhatsApp limit
        except Exception as e:
            msg.body("We're experiencing technical issues. Please call 0729 140 646 for assistance.")

        return HttpResponse(str(resp))

    return HttpResponse("WhatsApp Webhook is active!")