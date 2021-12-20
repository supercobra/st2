import {GIZMO_TYPE} from './gizmo-type';
import {GizmoWithValue, GizmoWithValueConstructorOptions} from './gizmo-with-value';

export class GizmoVideo extends GizmoWithValue<string> {
  override type = GIZMO_TYPE.VIDEO;
  override bootstrapIconName = 'camera-video';

  constructor(options: GizmoWithValueConstructorOptions<string>) {
    super(options);
  }

  static isUrlYoutube(url: string): boolean {
    if (url || url !== '') {
      const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=|\?v=)([^#&?]*).*/;
      const match = url.match(regExp);
      if (match && match[2].length === 11) {
        return true;
      }
    }
    return false;
  }

  static isUrlWistia(url: string): boolean {
    if (!url || url.length === 0) {
      return false;
    }
    const regExp = /https?:\/\/(.+)?(wistia\.com|wi\.st)\/(medias|embed)\/.*/;
    return !!url.match(regExp);
  }

  static getEmbeddedVideoUrl(url: string): string {
    if (url && GizmoVideo.isUrlYoutube(url)) {
      const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=|\?v=)([^#&?]*).*/;
      const match = url.match(regExp);
      if (match != null && match.length > 2) {
        return 'https://www.youtube.com/embed/' + match[2];
      }
    }
    return url;
  }

  getEmbeddedVideoUrl(): string {
    return GizmoVideo.getEmbeddedVideoUrl(this.value as string);
  }

  isNewValueValid(newValue: string): boolean {
    if (!newValue || newValue.length === 0) {
      return true;
    }
    return GizmoVideo.isUrlYoutube(newValue) || GizmoVideo.isUrlWistia(newValue);
  }

  deepCopy(): GizmoVideo {
    const clone = new GizmoVideo({});
    Object.assign(clone, this);
    return clone;
  }
}
