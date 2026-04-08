from django.urls import path
from . import views

urlpatterns = [
    path('products/', views.products_list),
    path('products/price-range/', views.products_by_price_range),
    path('products/<int:id>/', views.product_detail),
    path('categories/', views.categories_list),
    path('categories/<int:id>/', views.category_detail),
    path('categories/<int:id>/products/', views.category_products),
]