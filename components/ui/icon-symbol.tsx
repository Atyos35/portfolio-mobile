// Fallback for using MaterialIcons on Android and web.

import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { ComponentProps } from 'react';
import { OpaqueColorValue, type StyleProp, type TextStyle } from 'react-native';

type MaterialIconName = ComponentProps<typeof MaterialIcons>['name'];

interface IconMapping {
    [key: string]: MaterialIconName;
}

/**
 * Add your SF Symbols to Material Icons mappings here.
 * - see Material Icons in the [Icons Directory](https://icons.expo.fyi).
 * - see SF Symbols in the [SF Symbols](https://developer.apple.com/sf-symbols/) app.
 */
const MAPPING: IconMapping = {
    'house.fill': 'home',
    'paperplane.fill': 'send',
    'chevron.left.forwardslash.chevron.right': 'code',
    'chevron.right': 'chevron-right',
    'location.fill': 'location-on',
    'github': 'code',
    'linkedin': 'business',
    'twitter': 'chat',
    'globe': 'language',
    'person.fill': 'person',
    'briefcase.fill': 'work',
    'school.fill': 'school',
    'star.fill': 'star',
    'heart.fill': 'favorite',
    'message.fill': 'email',
    'phone.fill': 'phone',
    'calendar': 'calendar-today',
    'arrow.right': 'arrow-forward',
    'plus': 'add',
    'checkmark': 'check',
    'xmark': 'close',
    'sparkles': 'auto-awesome',
    'wand.and.stars': 'auto-awesome',
    'bolt.fill': 'bolt',
    'paintbrush.fill': 'brush',
    'figure.walk': 'directions-walk',
    'car.fill': 'directions-car',
    'airplane': 'flight',
    'camera.fill': 'photo-camera',
    'music.note': 'music-note',
    'book.fill': 'menu-book',
    'gift.fill': 'redeem',
    'trophy': 'emoji-events',
    'medal': 'emoji-events',
    'flag.fill': 'flag',
    'bell.fill': 'notifications',
    'gearshape.fill': 'settings',
    'info.circle.fill': 'info',
    'questionmark.circle.fill': 'help',
    'exclamationmark.circle.fill': 'warning',
    'checkmark.circle.fill': 'check-circle',
    'xmark.circle.fill': 'cancel',
    'arrow.left': 'arrow-back',
    'arrow.up': 'arrow-upward',
    'arrow.down': 'arrow-downward',
    'ellipsis': 'more-vert',
    'square.and.pencil': 'edit',
    'trash.fill': 'delete',
    'shareplay': 'share',
    'doc.fill': 'description',
    'folder.fill': 'folder',
    'clock.fill': 'schedule',
    'sun.max.fill': 'wb-sunny',
    'moon.fill': 'nightlight',
    'cloud.fill': 'cloud',
    'drop.fill': 'water-drop',
    'fire.fill': 'local-fire-department',
    'leaf.fill': 'eco',
    'eye.fill': 'visibility',
    'hand.wave.fill': 'pan-tool',
    'envelope.fill': 'email',
};

export type IconSymbolName = keyof typeof MAPPING;

/**
 * An icon component that uses native SF Symbols on iOS, and Material Icons on Android and web.
 * This ensures a consistent look across platforms, and optimal resource usage.
 * Icon `name`s are based on SF Symbols and require manual mapping to Material Icons.
 */
export function IconSymbol({
    name,
    size = 24,
    color,
    style,
}: {
    name: IconSymbolName;
    size?: number;
    color: string | OpaqueColorValue;
    style?: StyleProp<TextStyle>;
}) {
    return <MaterialIcons color={color} size={size} name={MAPPING[name]} style={style} />;
}