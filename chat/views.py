from django.shortcuts import render


# Create your views here.
def ChatPage(request):
    if request.method == "GET":
        return render(request, "chat.html")
