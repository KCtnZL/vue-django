from django.shortcuts import render
from django.http import JsonResponse

"""是否登录"""
def user(request):
    user = {'name': 'qiao',
            'age': '18'}
    return JsonResponse({'code':200, 'status': True, 'info': user}, safe=False)
