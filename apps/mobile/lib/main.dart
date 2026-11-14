import 'package:flutter/material.dart';
import 'package:mirevion_mobile/navigation/navigation.dart';

void main() {
  runApp(const ProviderScope(child: MirevionApp()));
}

class MirevionApp extends StatelessWidget {
  const MirevionApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp.router(
      title: 'Mirevion',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: const Color(0xFF0EA5E9)),
        useMaterial3: true,
      ),
      routerConfig: appRouter,
    );
  }
}
