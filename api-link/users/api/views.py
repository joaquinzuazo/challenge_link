from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from users.api import serializers
from users.models import User
from users.api.serializers import RegisterSerializer, UserSerializer, UserUpdateSerializer


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


    def put(self,request):
        user=User.objects.get(id=request.user.id)
        serializer=UserUpdateSerializer(user, request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(status=status.HTTP_200_OK,data=serializer.data)

        return Response(status=status.HTTP_400_BAD_REQUEST,data=serializer.errors)

    def delete(self,request):
        user=User.objects.get(id=request.user.id)
        user.delete()
        return Response(status=status.HTTP_200_OK,data='Usuario eliminado correctamente')
