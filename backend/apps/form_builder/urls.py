from django.urls import path
from .views import FormList, FormDetails

urlpatterns = [
    path("forms/", FormList.as_view(), name="forms_list"),
    path("forms/<int:pk>/", FormDetails.as_view(), name="form_details"),
]
