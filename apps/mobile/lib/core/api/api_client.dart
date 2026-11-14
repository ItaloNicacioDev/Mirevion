import 'package:dio/dio.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:mirevion_mobile/core/constants/app_constants.dart';
import 'package:mirevion_mobile/core/storage/secure_storage.dart';

class ApiClient {
  final Dio _dio;
  final SecureStorage _storage;

  ApiClient(this._dio, this._storage) {
    _dio.options.baseUrl = AppConstants.apiBaseUrl;
    _dio.options.connectTimeout = const Duration(seconds: 10);
    _dio.options.receiveTimeout = const Duration(seconds: 10);
    _dio.interceptors.add(
      InterceptorsWrapper(
        onRequest: (options, handler) async {
          final token = await _storage.getAccessToken();
          if (token != null) {
            options.headers['Authorization'] = 'Bearer $token';
          }
          return handler.next(options);
        },
        onError: (DioException error, handler) async {
          // TODO: implementar rotação de refresh token
          return handler.reject(error);
        },
      ),
    );
  }

  Dio get dio => _dio;
}

final apiClientProvider = Provider<ApiClient>((ref) {
  final storage = ref.watch(secureStorageProvider);
  return ApiClient(Dio(), storage);
});
