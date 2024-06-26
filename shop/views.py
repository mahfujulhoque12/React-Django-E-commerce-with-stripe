from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import *
from .serializers import *

# Create your views here.
class CategoryProductView(APIView):
    def get(self,request):
        category_obj = Category.objects.all()
        category_serializer = CategorySerializer(category_obj,many=True).data
        data = []
        for cate in category_serializer:
            product_obj = Product.objects.filter(category=cate['id'])
            cate['products'] = ProductSerializer(product_obj,many=True,context={'request':request}).data
            data.append(cate)
        return Response(data)
    

class SingleCategoryView(APIView):
    def get(self, request, pk):
        category_obj =Category.objects.filter(id=pk)
        category_serializer = CategorySerializer(category_obj,many=True,context={'request':request}).data
        data = []
        for cate in category_serializer:
            product_obj = Product.objects.filter(category=cate['id'])
            cate['products'] = ProductSerializer(product_obj,many=True,context={'request':request}).data
            data.append(cate)
        return Response(data)


class CategoriesView(APIView):
    def get(self,request):
        categories_obj = Category.objects.all()
        categories_serializer = CategorySerializer(categories_obj,many=True,context={'request':request}).data
        return Response(categories_serializer) 
            
                

class ProductDetails(APIView):
  def get(self, request, pk):
        product_obj = Product.objects.filter(id=pk)
        data = []
        product_serializer = SingleProductSerializer(
            product_obj, many=True, context={'request': request}).data
        for prod in product_serializer:
            prod_view = ProductView.objects.filter(product=prod['id'])
            if prod_view:
                prod['view'] = prod_view.view
            else:
                prod['view'] = 0
            prod_review = Review.objects.filter(product=prod['id'])
            prod_review_serializer = ReviewSerializer(prod_review, many=True).data    
            prod['review'] = prod_review_serializer
            data.append(prod)
        return Response(data)



class BrandNameView(APIView):
    def get(self, request):
        brand_obj = Brand.objects.all()
        brand_serializer = BrandSerializer(brand_obj, many=True,context={'request':request}).data
        return Response(brand_serializer)