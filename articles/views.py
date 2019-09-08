from django.shortcuts import render,redirect
from .models import Article
from django.contrib.auth.decorators import login_required
from .import forms


# Create your views here.
def articles(request):
    articles=Article.objects.all().order_by('-date')
    return render(request,'articles/articles.html',{'articles': articles})


def article_details(request,slug):
    article=Article.objects.get(slug=slug)
    return render(request,'articles/articles_details.html',{'article': article})

    
@login_required(login_url="/accounts/login/")
def articles_create(request):
     if request.method=='POST':
        form=forms.CreateArticle(request.POST,request.FILES)
        if form.is_valid():
              #saving
              instance=form.save(commit=False)
              instance.Author=request.user
              instance.save()
              return redirect('articles:list')
     else:
        form=forms.CreateArticle()
     return render(request,'articles/articles_create.html',{'form': form})
