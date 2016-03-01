@extends('template')

@section('title', 'Áfangar')

@section('content')
    <div class="row">
        <div class="col-sm-12 col-lg-8 coursecontainer"></div>
    </div>

    {!! Html::script('js/jquery-2.2.0.js') !!}
    {!! Html::script('js/getCourses.js') !!}

@endsection
