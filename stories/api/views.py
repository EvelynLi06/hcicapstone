from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Story
from .serializers import StorySerializer

@api_view(['GET'])
def getRoutes(request):

    routes = [
        {
            'Endpoint': '/stories/',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of stories'
        },
        {
            'Endpoint': '/stories/id',
            'method': 'GET',
            'body': None,
            'description': 'Returns a single story object'
        },
        {
            'Endpoint': '/stories/create/',
            'method': 'POST',
            'body': {'body': ""},
            'description': 'Creates new story with data sent in post request'
        },
    ]

    return Response(routes)

@api_view(['GET'])
def getStories(request):
    stories = Story.objects.all().order_by('-created')
    serializer = StorySerializer(stories, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getStory(request, id):
    story = Story.objects.get(id=id)
    serializer = StorySerializer(story, many=False)
    return Response(serializer.data)

@api_view(['POST'])
def createStory(request):
    data = request.data
    story = Story.objects.create(
        body=data['body'],
        preview_body=data['body'],
        tag="MyFirstVisit"
    )
    serializer = StorySerializer(story, many=False)
    return Response(serializer.data)
