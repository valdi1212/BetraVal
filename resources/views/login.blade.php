<!doctype html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Innskráning</title>
	<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
</head>
<body>

<div class="container">
	<div class="col-lg-4 col-lg-push-4 col-xs-12">
		<h1>Innskráning á 1212.is</h1>
		<hr>
		{!! Form::open() !!}
		<div class="form-group">
			{!! Form::label('username', 'Notendanafn:') !!}
			{!! Form::text('username', null, ['class' => 'form-control']) !!}
		</div>

		<div class='form-group'>
			{!! Form::label('password', 'Lykilorð:') !!}
			{!! Form::text('password', null, ['class' => 'form-control']) !!}
		</div>

		<div class='form-group'>
			{!! Form::submit('Áfram', ['class' => 'btn btn-primary form-control']) !!}
		</div>

		{!! Form::close() !!}

		@if ($errors->any())
			<ul class="alert alert-danger">
				@foreach($errors->all() as $error)
					<li>{{ $error }}</li>
				@endforeach
			</ul>
		@endif
	</div>
</div>
</body>
</html>