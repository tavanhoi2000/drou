<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\File;

foreach (File::allFiles(__DIR__ . '/api') as $routeFile) {
    require $routeFile->getPathname();
}

// get csrf token
Route::get('/csrf-token', function () {
    return csrf_token();
});


Route::post('/upload-file', function (Request $request) {
    $file = $request->file('file')->store('public');
    $fileName = explode('/', $file)[1];
    return 'http://127.0.0.1:8000/storage/' . $fileName;
});
