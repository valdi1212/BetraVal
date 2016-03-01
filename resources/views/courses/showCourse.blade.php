@extends('template')

@section('title', $id)

@section('content')
    <div class="row">
        <div class="col-sm-12 col-lg-8 coursecontainer"></div>
        <p><a href="/courses">Til baka</a></p>
    </div>

    {!! Html::script('js/jquery-2.2.0.js') !!}
    {!! Html::script('js/showCourse.js') !!}
@endsection