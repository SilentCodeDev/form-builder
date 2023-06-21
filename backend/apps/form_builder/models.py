from django.db import models


# Create your models here.
class Form(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self) -> str:
        return self.name


class Section(models.Model):
    name = models.CharField(max_length=255)
    form = models.ForeignKey(Form, on_delete=models.CASCADE, related_name="sections")

    def __str__(self) -> str:
        return self.name


class Field(models.Model):
    FIELD_TYPE_CHOICES = [
        ("text", "Text"),
        ("password", "Password"),
        ("number", "Number"),
        ("email", "Email"),
        ("phone", "Phone"),
        ("radio", "radio"),
        ("checkbox", "Checkbox"),
        ("select", "Select"),
    ]
    label = models.CharField(max_length=255)
    field_type = models.CharField(max_length=50, choices=FIELD_TYPE_CHOICES)
    section = models.ForeignKey(
        Section, on_delete=models.CASCADE, related_name="form_fields"
    )

    def __str__(self) -> str:
        return self.label


class FieldChoice(models.Model):
    field = models.ForeignKey(Field, on_delete=models.CASCADE, related_name="choices")
    choice_text = models.CharField(max_length=255)

    def __str__(self) -> str:
        return self.choice_text
