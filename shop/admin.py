from django.contrib import admin
from . models import(
    Customer,
    Category,
    Product,
    ProductView,
    Review,
    Slider,
    TrendinProduct,
    Cart,
    CartProduct,
    Order,
    Brand

)

# Register your models here.

admin.site.register([
    Customer,
    Category,
    Product,
    ProductView,
    Review,
    Slider,
    TrendinProduct,
    Brand,
    Cart,
    CartProduct,
    Order,

])