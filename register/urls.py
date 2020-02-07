from django.contrib import admin
from django.urls import path, include # new
from . import views


urlpatterns = [
    path('admin/', admin.site.urls),
    path('accounts/', include('django.contrib.auth.urls')), # new
    # path('aman/',views.aman)
]