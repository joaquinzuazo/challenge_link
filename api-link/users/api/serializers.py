from rest_framework import serializers
from users.models import User

class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields=['id','username','email','password']

    def create(self,validate_data):
        password=validate_data.pop('password', None)
        instance=self.Meta.model(**validate_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields=['id','username','email']

class UserUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields=['username','email']