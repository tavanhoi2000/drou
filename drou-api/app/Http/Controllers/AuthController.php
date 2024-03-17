<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Http\Controllers\BaseController;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    /**
     * user instance.
     */
    protected $user;

    /**
     * Create a new AuthController instance.
     *
     * @param  \App\Models\User  $user
     * @return void
     */
    public function __construct(User $user)
    {
        $this->user = $user;
    }

    /**
     * Login the user.
     *
     * @param LoginRequest $request
     * @return
     */
    public function authenticate(Request $request)
    {
        $credentials = $request->only('email', 'password');
        
        if (!auth()->attempt($credentials)) {
            return response()->json([
                'message' => 'Sai tài khoản hoặc mật khẩu'
            ], 401);
        }
        if (auth()->user()->status == 'deactivate') {
            auth()->logout();   
            return response()->json([
                'message' => 'Tài khoản của bạn đã bị khóa'
            ], 401);
        }
        return response()->json([
            'message' => 'Đăng nhập thành công',
            'token' => auth()->user()->createToken('authToken')->plainTextToken,
            'user' => auth()->user()
        ]);
    }


    public function register(Request $request)
    {
        $user = $this->user->create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
            'phone' => $request->phone,
            'address' => $request->address || '',
            'role' => 'user',
        ]);
        // viết example cho đoạn đăng ký phía trên dạng json và comment lại
        // $user = $this->user->create([
        //     'name' => 'Nguyễn Văn A',
        //     'email' => '
        //     'password' => bcrypt('123456'),
        //     'phone' => '0123456789',
        //     'address' => 'Hà Nội',
        //     'role' => 'user',
        //     'status' => 'active'
        // ]);
        // chuyển đoạn trên thanh dạng raw và comment lại
        // 

        return response()->json([
            'message' => 'Đăng ký thành công',
            'user' => $user
        ]);
    }

    /**
     * Logout the user.
     *
     * @return \Illuminate\Http\Response
     */
    public function logout()
    {
        auth()->logout();

        return response()->json([
            'message' => 'Successfully logged out'
        ]);
    }

    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function user()
    {
        return response()->json(auth()->user());
    }
}
