// This is Fluent-style icon
import * as React from 'react';
import cx from 'classnames';
import { createSvgIcon } from '../utils/createSvgIcon';
import { iconClassNames } from '../utils/iconClassNames';

export const ArrowSortIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="2 2 16 16" className={classes.svg}>
      <g className={cx(iconClassNames.outline, classes.outlinePart)}>
        <path d="M5.49988 5.70981L2.85551 8.35418C2.66024 8.54944 2.34366 8.54944 2.1484 8.35418C1.95314 8.15891 1.95314 7.84233 2.1484 7.64707L5.61673 4.17874C5.70845 4.06947 5.84605 4 5.99988 4L6.00155 4C6.08023 3.99998 6.15892 4.01841 6.23056 4.05531C6.27569 4.07847 6.31803 4.10895 6.35583 4.14675L6.36581 4.15701L9.85588 7.64709C10.0511 7.84235 10.0511 8.15893 9.85588 8.3542C9.66062 8.54946 9.34404 8.54946 9.14878 8.3542L6.49988 5.7053V15.5C6.49988 15.7761 6.27602 16 5.99988 16C5.72374 16 5.49988 15.7761 5.49988 15.5V5.70981Z" />
        <path d="M14.5044 14.2902L17.1488 11.6458C17.344 11.4506 17.6606 11.4506 17.8559 11.6458C18.0511 11.8411 18.0511 12.1577 17.8559 12.3529L14.3875 15.8213C14.2958 15.9305 14.1582 16 14.0044 16L14.0027 16C13.924 16 13.8454 15.9816 13.7737 15.9447C13.7286 15.9215 13.6862 15.8911 13.6484 15.8533L13.6385 15.843L10.1484 12.3529C9.95313 12.1577 9.95313 11.8411 10.1484 11.6458C10.3437 11.4505 10.6602 11.4505 10.8555 11.6458L13.5044 14.2947L13.5044 4.5C13.5044 4.22386 13.7283 4 14.0044 4C14.2805 4 14.5044 4.22386 14.5044 4.5L14.5044 14.2902Z" />
      </g>
      <g className={cx(iconClassNames.filled, classes.filledPart)}>
        <path d="M9.29341 7.22797C9.5863 7.52086 9.5863 7.99574 9.29341 8.28863C9.00052 8.58152 8.52564 8.58152 8.23275 8.28863L6.50001 6.55589V15.25C6.50001 15.6642 6.16422 16 5.75001 16C5.3358 16 5.00001 15.6642 5.00001 15.25V6.56639L3.28228 8.28411C2.98939 8.57701 2.51452 8.57701 2.22162 8.28411C1.92873 7.99122 1.92873 7.51635 2.22162 7.22345L5.16733 4.27774C5.30484 4.10829 5.51478 4 5.75001 4C5.9432 3.99904 6.1377 4.07226 6.2851 4.21966L9.29341 7.22797Z" />
        <path d="M10.7086 12.772C10.4157 12.4791 10.4157 12.0043 10.7086 11.7114C11.0014 11.4185 11.4763 11.4185 11.7692 11.7114L13.502 13.4441L13.502 4.74999C13.502 4.33578 13.8377 3.99999 14.252 3.99999C14.6662 3.99999 15.002 4.33578 15.002 4.74999L15.002 13.4336L16.7197 11.7159C17.0126 11.423 17.4874 11.423 17.7803 11.7159C18.0732 12.0088 18.0732 12.4836 17.7803 12.7765L14.8346 15.7222C14.6971 15.8917 14.4872 16 14.252 16C14.0588 16.001 13.8643 15.9277 13.7169 15.7803L10.7086 12.772Z" />
      </g>
    </svg>
  ),
  displayName: 'ArrowSortIcon',
});