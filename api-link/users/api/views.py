from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from users.models import User
from users.api.serializers import RegisterSerializer, UserSerializer


class RegisterView(APIView):
    def post(self,request):
        serializer=RegisterSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(status=status.HTTP_200_OK,data=serializer.data)

        return Response(status=status.HTTP_400_BAD_REQUEST,data=serializer.errors)
        
class UserView(APIView):
    permission_classes=[IsAuthenticated]
    def get(self,request):
        serializer=UserSerializer(request.user)
        return Response(status=status.HTTP_200_OK,data=serializer.data)


        