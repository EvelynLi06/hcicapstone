from django.db import models

class Story(models.Model):
    body = models.TextField()
    tag = models.TextField()
    preview_body = models.TextField()
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.body[:50]
