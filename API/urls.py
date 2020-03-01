
from rest_framework.routers import DefaultRouter

from django.urls import path
from .  import views
#prospect_ViewSet = prospectViewSet.as_view({
#    'get': 'ViewSet'
#})
#prospect_detail = prospectViewSet.as_view({
#   'get': 'retrieve'
#})
# 
# 

router = DefaultRouter()
router.register(r'prospects', views.prospectViewSet, basename='prospect')
router.register(r'leads', views.leadViewSet, basename='lead')
router.register(r'attachments', views.attachmentViewSet, basename='attachment')
router.register(r'emails', views.emailViewSet, basename='email')
router.register(r'phone_numbers', views.phone_numberViewSet, basename='phone_number')
router.register(r'comments', views.commentViewSet, basename='comment')


urlpatterns = router.urls 

