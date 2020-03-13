
from rest_framework.routers import DefaultRouter

from django.urls import path
from . import views




router = DefaultRouter()
router.register(r'prospects', views.ProspectViewSet, basename='prospect')
router.register(r'leads', views.LeadViewSet, basename='lead')
router.register(r'attachments', views.AttachmentViewSet, basename='attachment')
router.register(r'comments', views.CommentViewSet, basename='comment')
router.register(r'users', views.UserViewSet, basename='user')

urlpatterns = router.urls

