from django.urls import path
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from users.api.views import RegisterView, UserView

urlpatterns = [
    path('auth/login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('auth/token/', TokenRefreshView.as_view(), name='token_refresh'),
    path('auth/register/', RegisterView.as_view()),
    path('auth/me/', UserView.as_view()),

]