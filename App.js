import React from 'react';
import {
  Alert,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';

function MonitorIcon() {
  return (
    <View style={styles.monitorIconWrap}>
      <View style={styles.monitorScreen} />
      <View style={styles.monitorStand} />
      <View style={styles.monitorBase} />
    </View>
  );
}

function CameraIcon() {
  return (
    <View style={styles.cameraIconWrap}>
      <View style={styles.cameraTop} />
      <View style={styles.cameraBody}>
        <View style={styles.cameraLensOuter}>
          <View style={styles.cameraLensInner} />
        </View>
      </View>
    </View>
  );
}

function MenuIcon() {
  return (
    <View style={styles.menuIcon}>
      <View style={styles.menuLine} />
      <View style={styles.menuLine} />
      <View style={styles.menuLine} />
    </View>
  );
}

function ActionCard({ label, type, onPress, compact }) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={label}
      onPress={onPress}
      style={({ pressed }) => [
        styles.actionCard,
        type === 'monitor' ? styles.monitorCard : styles.cameraCard,
        compact && styles.actionCardCompact,
        pressed && styles.actionCardPressed,
      ]}
    >
      {type === 'monitor' ? <MonitorIcon /> : <CameraIcon />}
      <Text style={styles.actionLabel}>{label}</Text>
    </Pressable>
  );
}

export default function App() {
  const { width } = useWindowDimensions();
  const isNarrow = width < 390;

  const onAction = (label) => {
    Alert.alert(label, `${label} action selected.`);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.brand}>MyApp</Text>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Open menu"
            hitSlop={12}
            onPress={() => Alert.alert('Menu', 'Menu selected.')}
          >
            <MenuIcon />
          </Pressable>
        </View>

        <View style={styles.main}>
          <View style={styles.heroCopy}>
            <Text style={[styles.title, isNarrow && styles.titleNarrow]}>Welcome!</Text>
            <Text style={[styles.subtitle, isNarrow && styles.subtitleNarrow]}>
              Choose an option below to get started.
            </Text>
          </View>

          <View style={[styles.actions, isNarrow && styles.actionsNarrow]}>
            <ActionCard
              label="Monitor"
              type="monitor"
              compact={isNarrow}
              onPress={() => onAction('Monitor')}
            />
            <ActionCard
              label="Camera"
              type="camera"
              compact={isNarrow}
              onPress={() => onAction('Camera')}
            />
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>© 2026 MyApp. All rights reserved.</Text>
          <View style={styles.footerLinks}>
            <Pressable onPress={() => Alert.alert('Privacy')}>
              <Text style={styles.footerLink}>Privacy</Text>
            </Pressable>
            <Text style={styles.footerSeparator}>|</Text>
            <Pressable onPress={() => Alert.alert('Terms')}>
              <Text style={styles.footerLink}>Terms</Text>
            </Pressable>
            <Text style={styles.footerSeparator}>|</Text>
            <Pressable onPress={() => Alert.alert('Contact')}>
              <Text style={styles.footerLink}>Contact</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const INK = '#17243A';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    minHeight: 88,
    paddingHorizontal: 24,
    paddingVertical: 20,
    backgroundColor: '#F5F8FC',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  brand: {
    fontSize: 32,
    lineHeight: 38,
    fontWeight: '800',
    color: INK,
    letterSpacing: -0.8,
  },
  menuIcon: {
    width: 34,
    gap: 6,
  },
  menuLine: {
    width: 34,
    height: 4,
    borderRadius: 999,
    backgroundColor: INK,
  },
  main: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heroCopy: {
    alignItems: 'center',
    marginBottom: 34,
  },
  title: {
    fontSize: 42,
    lineHeight: 48,
    fontWeight: '800',
    color: INK,
    letterSpacing: -1.2,
  },
  titleNarrow: {
    fontSize: 36,
    lineHeight: 42,
  },
  subtitle: {
    marginTop: 14,
    fontSize: 20,
    lineHeight: 28,
    color: '#4F6078',
    textAlign: 'center',
  },
  subtitleNarrow: {
    fontSize: 17,
    lineHeight: 24,
  },
  actions: {
    width: '100%',
    maxWidth: 560,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
  },
  actionsNarrow: {
    gap: 12,
  },
  actionCard: {
    flex: 1,
    maxWidth: 248,
    aspectRatio: 1,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 18,
    shadowColor: '#000000',
    shadowOpacity: 0.05,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 2,
  },
  actionCardCompact: {
    borderRadius: 24,
    padding: 14,
  },
  actionCardPressed: {
    transform: [{ scale: 0.97 }],
    opacity: 0.88,
  },
  monitorCard: {
    backgroundColor: '#DDEBFF',
  },
  cameraCard: {
    backgroundColor: '#D9F5DE',
  },
  actionLabel: {
    marginTop: 18,
    fontSize: 24,
    fontWeight: '800',
    color: INK,
  },
  monitorIconWrap: {
    width: 82,
    height: 74,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  monitorScreen: {
    width: 72,
    height: 50,
    borderWidth: 7,
    borderColor: INK,
    borderRadius: 6,
  },
  monitorStand: {
    width: 8,
    height: 12,
    backgroundColor: INK,
  },
  monitorBase: {
    width: 36,
    height: 7,
    borderRadius: 4,
    backgroundColor: INK,
  },
  cameraIconWrap: {
    width: 88,
    height: 74,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  cameraTop: {
    position: 'absolute',
    top: 7,
    width: 36,
    height: 16,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: INK,
  },
  cameraBody: {
    width: 84,
    height: 58,
    borderWidth: 7,
    borderColor: INK,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  cameraLensOuter: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 7,
    borderColor: INK,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cameraLensInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: INK,
  },
  footer: {
    minHeight: 124,
    paddingHorizontal: 20,
    paddingVertical: 24,
    backgroundColor: '#F5F8FC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerText: {
    fontSize: 15,
    lineHeight: 22,
    color: '#566882',
    textAlign: 'center',
  },
  footerLinks: {
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  footerLink: {
    fontSize: 14,
    color: '#697B95',
  },
  footerSeparator: {
    color: '#98A5B7',
  },
});
