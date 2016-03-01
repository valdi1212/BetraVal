@extends('template')

@section('title', 'Dummy')

@section('content')
    <style>

        .node circle {
            fill: #ccc;
            stroke: #fff;
            stroke-width: 2px;
        }

        .node text {
            color: black;
        }

        .link {
            stroke: #777;
            stroke-linecap: round;
            stroke-width: 1px;
        }

    </style>

    {!! Html::script('js/jquery-2.2.0.js') !!}
    {!! Html::script('http://d3js.org/d3.v3.min.js') !!}
    {!! Html::script('js/dummyGraph.js') !!}
@endsection