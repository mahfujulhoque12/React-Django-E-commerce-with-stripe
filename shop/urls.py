
from django.urls import path, include
from .views import *

urlpatterns = [
    path('categoryproduct/',CategoryProductView.as_view(),name='categoryproduct'),
    path('categories/',CategoriesView.as_view()),
    path('singlecategorie/<int:pk>/',SingleCategoryView.as_view()),
    path('productDetails/<int:pk>/',ProductDetails.as_view()),
    path('brandsname/',BrandNameView.as_view()),


]
