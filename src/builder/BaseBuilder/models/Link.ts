import { Link as LinkData } from '../../../types';

export class Link {
  private href: string;

  private text?: string;

  private type?: string;

  /**
   * @see http://www.topografix.com/gpx/1/1/#type_linkType
   */
  public constructor(
    href: string,
    {
      text,
      type,
    }: {
      text?: string;
      type?: string;
    } = {},
  ) {
    this.href = href;
    this.text = text;
    this.type = type;
  }

  public toObject(): LinkData {
    const { href, text, type } = this;

    return {
      attributes: { href },
      ...(text ? { text } : {}),
      ...(type ? { type } : {}),
    };
  }
}
