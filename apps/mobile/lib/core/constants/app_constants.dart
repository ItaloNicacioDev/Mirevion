class AppConstants {
  static const String apiBaseUrl = String.fromEnvironment('MIREVION_API_BASE_URL', defaultValue: 'http://localhost:8000/api/v1');
  static const int accessTokenLifetimeMinutes = 15;
}
