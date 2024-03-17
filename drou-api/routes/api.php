<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\File;


foreach (File::allFiles(__DIR__ . '/api') as $routeFile) {
    require $routeFile->getPathname();
}

// get csrf token
Route::get('/csrf-token', function () {
    return csrf_token();
});

