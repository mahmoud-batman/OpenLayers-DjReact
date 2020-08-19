from django.urls import path
from .views import BookmarkView, BookmarkDetailView

urlpatterns = [
    path('', BookmarkView.as_view(), name="bookmark_view"),
    path('<int:pk>/', BookmarkDetailView.as_view(), name="bookmark_detail_view"),
]
